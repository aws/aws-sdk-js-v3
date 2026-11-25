/**
 * Lets one async task run at a time. Waiting tasks run one after another once the lock is released.
 *
 * @internal
 */
export class Mutex {
  private held: Promise<void> | undefined;

  /**
   * True while a task holds the lock.
   */
  public get isLocked(): boolean {
    return this.held !== undefined;
  }

  /**
   * Waits until the lock is free, then runs `task` while holding it.
   */
  public async runExclusive<T>(task: () => Promise<T>): Promise<T> {
    while (this.held) {
      await this.held;
    }
    let release!: () => void;
    this.held = new Promise<void>((resolve) => {
      release = resolve;
    });
    try {
      return await task();
    } finally {
      this.held = undefined;
      release();
    }
  }
}
