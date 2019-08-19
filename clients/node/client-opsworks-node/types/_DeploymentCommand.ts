/**
 * <p>Used to specify a stack or deployment command.</p>
 */
export interface _DeploymentCommand {
  /**
   * <p>Specifies the operation. You can specify only one command.</p> <p>For stacks, the following commands are available:</p> <ul> <li> <p> <code>execute_recipes</code>: Execute one or more recipes. To specify the recipes, set an <code>Args</code> parameter named <code>recipes</code> to the list of recipes to be executed. For example, to execute <code>phpapp::appsetup</code>, set <code>Args</code> to <code>{"recipes":["phpapp::appsetup"]}</code>.</p> </li> <li> <p> <code>install_dependencies</code>: Install the stack's dependencies.</p> </li> <li> <p> <code>update_custom_cookbooks</code>: Update the stack's custom cookbooks.</p> </li> <li> <p> <code>update_dependencies</code>: Update the stack's dependencies.</p> </li> </ul> <note> <p>The update_dependencies and install_dependencies commands are supported only for Linux instances. You can run the commands successfully on Windows instances, but they do nothing.</p> </note> <p>For apps, the following commands are available:</p> <ul> <li> <p> <code>deploy</code>: Deploy an app. Ruby on Rails apps have an optional <code>Args</code> parameter named <code>migrate</code>. Set <code>Args</code> to {"migrate":["true"]} to migrate the database. The default setting is {"migrate":["false"]}.</p> </li> <li> <p> <code>rollback</code> Roll the app back to the previous version. When you update an app, AWS OpsWorks Stacks stores the previous version, up to a maximum of five versions. You can use this command to roll an app back as many as four versions.</p> </li> <li> <p> <code>start</code>: Start the app's web or application server.</p> </li> <li> <p> <code>stop</code>: Stop the app's web or application server.</p> </li> <li> <p> <code>restart</code>: Restart the app's web or application server.</p> </li> <li> <p> <code>undeploy</code>: Undeploy the app.</p> </li> </ul>
   */
  Name:
    | "install_dependencies"
    | "update_dependencies"
    | "update_custom_cookbooks"
    | "execute_recipes"
    | "configure"
    | "setup"
    | "deploy"
    | "rollback"
    | "start"
    | "stop"
    | "restart"
    | "undeploy"
    | string;

  /**
   * <p>The arguments of those commands that take arguments. It should be set to a JSON object with the following format:</p> <p> <code>{"arg_name1" : ["value1", "value2", ...], "arg_name2" : ["value1", "value2", ...], ...}</code> </p> <p>The <code>update_dependencies</code> command takes two arguments:</p> <ul> <li> <p> <code>upgrade_os_to</code> - Specifies the desired Amazon Linux version for instances whose OS you want to upgrade, such as <code>Amazon Linux 2016.09</code>. You must also set the <code>allow_reboot</code> argument to true.</p> </li> <li> <p> <code>allow_reboot</code> - Specifies whether to allow AWS OpsWorks Stacks to reboot the instances if necessary, after installing the updates. This argument can be set to either <code>true</code> or <code>false</code>. The default value is <code>false</code>.</p> </li> </ul> <p>For example, to upgrade an instance to Amazon Linux 2016.09, set <code>Args</code> to the following.</p> <p> <code> { "upgrade_os_to":["Amazon Linux 2016.09"], "allow_reboot":["true"] } </code> </p>
   */
  Args?:
    | { [key: string]: Array<string> | Iterable<string> }
    | Iterable<[string, Array<string> | Iterable<string>]>;
}

export interface _UnmarshalledDeploymentCommand extends _DeploymentCommand {
  /**
   * <p>The arguments of those commands that take arguments. It should be set to a JSON object with the following format:</p> <p> <code>{"arg_name1" : ["value1", "value2", ...], "arg_name2" : ["value1", "value2", ...], ...}</code> </p> <p>The <code>update_dependencies</code> command takes two arguments:</p> <ul> <li> <p> <code>upgrade_os_to</code> - Specifies the desired Amazon Linux version for instances whose OS you want to upgrade, such as <code>Amazon Linux 2016.09</code>. You must also set the <code>allow_reboot</code> argument to true.</p> </li> <li> <p> <code>allow_reboot</code> - Specifies whether to allow AWS OpsWorks Stacks to reboot the instances if necessary, after installing the updates. This argument can be set to either <code>true</code> or <code>false</code>. The default value is <code>false</code>.</p> </li> </ul> <p>For example, to upgrade an instance to Amazon Linux 2016.09, set <code>Args</code> to the following.</p> <p> <code> { "upgrade_os_to":["Amazon Linux 2016.09"], "allow_reboot":["true"] } </code> </p>
   */
  Args?: { [key: string]: Array<string> };
}
