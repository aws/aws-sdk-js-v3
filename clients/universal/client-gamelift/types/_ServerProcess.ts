/**
 * <p>A set of instructions for launching server processes on each instance in a fleet. Server processes run either a custom game build executable or a Realtime Servers script. Each instruction set identifies the location of the custom game build executable or Realtime launch script, optional launch parameters, and the number of server processes with this configuration to maintain concurrently on the instance. Server process configurations make up a fleet's <code> <a>RuntimeConfiguration</a> </code>.</p>
 */
export interface _ServerProcess {
  /**
   * <p>Location of the server executable in a custom game build or the name of the Realtime script file that contains the <code>Init()</code> function. Game builds and Realtime scripts are installed on instances at the root: </p> <ul> <li> <p>Windows (for custom game builds only): <code>C:\game</code>. Example: "<code>C:\game\MyGame\server.exe</code>" </p> </li> <li> <p>Linux: <code>/local/game</code>. Examples: "<code>/local/game/MyGame/server.exe</code>" or "<code>/local/game/MyRealtimeScript.js</code>"</p> </li> </ul>
   */
  LaunchPath: string;

  /**
   * <p>Optional list of parameters to pass to the server executable or Realtime script on launch.</p>
   */
  Parameters?: string;

  /**
   * <p>Number of server processes using this configuration to run concurrently on an instance.</p>
   */
  ConcurrentExecutions: number;
}

export type _UnmarshalledServerProcess = _ServerProcess;
