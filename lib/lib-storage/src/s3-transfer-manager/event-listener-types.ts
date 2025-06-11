/**
 * Function type for handling transfer events in the transfer manager.
 * Represents a callback that receives event data during transfer operations.
 * 
 * @param event - The event object containing transfer details and progress information.

 * @public
 */
export type EventListenerFunction<E = Event> = (event: Event & E) => void;

/**
 * Union type for handling transfer events in the transfer manager.
 * Can be a function or an object.
 *
 * @public
 */
export type EventListener<E = Event> = EventListenerFunction<E> | EventListenerObject<E>;

/**
 * Object type for handling transfer events in the transfer manager.
 * Represents an object that implements the `handleEvent` method to handle transfer events.
 *
 * @public
 */
export type EventListenerObject<E = Event> = {
  handleEvent: EventListenerFunction<E>;
};

/**
 * Configuration options for registering event listeners in the transfer manager.
 * Controls the behavior of event listeners for transfer events.
 *
 * @public
 */
export type AddEventListenerOptions = {
  /**
   * A boolean value indicating that the listener should be invoked at most once
   * after being added. If true, the listener would be automatically removed when invoked.
   * If not specified, defaults to false.
   */
  once?: boolean;
  /**
   * An AbortSignal. The listener will be removed when the abort() method of the
   * AbortController which owns the AbortSignal is called. If not specified, no
   * AbortSignal is associated with the listener.
   */
  signal?: AbortSignal;
};

/**
 * Configuration options for removing event listeners in the transfer manager.
 * Controls the behavior of event listeners for transfer events.
 *
 * @public
 */
export type RemoveEventListenerOptions = {
  capture?: boolean;
};
