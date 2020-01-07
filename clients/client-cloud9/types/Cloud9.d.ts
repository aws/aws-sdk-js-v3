import { Cloud9Client } from "./Cloud9Client";
import { CreateEnvironmentEC2CommandInput, CreateEnvironmentEC2CommandOutput } from "./commands/CreateEnvironmentEC2Command";
import { CreateEnvironmentMembershipCommandInput, CreateEnvironmentMembershipCommandOutput } from "./commands/CreateEnvironmentMembershipCommand";
import { DeleteEnvironmentCommandInput, DeleteEnvironmentCommandOutput } from "./commands/DeleteEnvironmentCommand";
import { DeleteEnvironmentMembershipCommandInput, DeleteEnvironmentMembershipCommandOutput } from "./commands/DeleteEnvironmentMembershipCommand";
import { DescribeEnvironmentMembershipsCommandInput, DescribeEnvironmentMembershipsCommandOutput } from "./commands/DescribeEnvironmentMembershipsCommand";
import { DescribeEnvironmentStatusCommandInput, DescribeEnvironmentStatusCommandOutput } from "./commands/DescribeEnvironmentStatusCommand";
import { DescribeEnvironmentsCommandInput, DescribeEnvironmentsCommandOutput } from "./commands/DescribeEnvironmentsCommand";
import { ListEnvironmentsCommandInput, ListEnvironmentsCommandOutput } from "./commands/ListEnvironmentsCommand";
import { UpdateEnvironmentCommandInput, UpdateEnvironmentCommandOutput } from "./commands/UpdateEnvironmentCommand";
import { UpdateEnvironmentMembershipCommandInput, UpdateEnvironmentMembershipCommandOutput } from "./commands/UpdateEnvironmentMembershipCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>AWS Cloud9</fullname>
 *          <p>AWS Cloud9 is a collection of tools that you can use to code, build, run, test, debug, and release software in the cloud.</p>
 *          <p>For more information about AWS Cloud9, see the <a href="https://docs.aws.amazon.com/cloud9/latest/user-guide">AWS Cloud9 User Guide</a>.</p>
 *          <p>AWS Cloud9 supports these operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>CreateEnvironmentEC2</code>: Creates an AWS Cloud9 development environment, launches an Amazon EC2 instance, and then connects from the instance to the environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CreateEnvironmentMembership</code>: Adds an environment member to an environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteEnvironment</code>: Deletes an environment. If an Amazon EC2 instance is connected to the environment, also terminates the instance.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteEnvironmentMembership</code>: Deletes an environment member from an environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeEnvironmentMemberships</code>: Gets information about environment members for an environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeEnvironments</code>: Gets information about environments.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeEnvironmentStatus</code>: Gets status information for an environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListEnvironments</code>: Gets a list of environment identifiers.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateEnvironment</code>: Changes the settings of an existing environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateEnvironmentMembership</code>: Changes the settings of an existing environment member for an environment.</p>
 *             </li>
 *          </ul>
 */
export declare class Cloud9 extends Cloud9Client {
    /**
     * <p>Creates an AWS Cloud9 development environment, launches an Amazon Elastic Compute Cloud (Amazon EC2) instance, and then connects from the instance to the environment.</p>
     */
    createEnvironmentEC2(args: CreateEnvironmentEC2CommandInput, options?: __HttpHandlerOptions): Promise<CreateEnvironmentEC2CommandOutput>;
    createEnvironmentEC2(args: CreateEnvironmentEC2CommandInput, cb: (err: any, data?: CreateEnvironmentEC2CommandOutput) => void): void;
    createEnvironmentEC2(args: CreateEnvironmentEC2CommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateEnvironmentEC2CommandOutput) => void): void;
    /**
     * <p>Adds an environment member to an AWS Cloud9 development environment.</p>
     */
    createEnvironmentMembership(args: CreateEnvironmentMembershipCommandInput, options?: __HttpHandlerOptions): Promise<CreateEnvironmentMembershipCommandOutput>;
    createEnvironmentMembership(args: CreateEnvironmentMembershipCommandInput, cb: (err: any, data?: CreateEnvironmentMembershipCommandOutput) => void): void;
    createEnvironmentMembership(args: CreateEnvironmentMembershipCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateEnvironmentMembershipCommandOutput) => void): void;
    /**
     * <p>Deletes an AWS Cloud9 development environment. If an Amazon EC2 instance is connected to the environment, also terminates the instance.</p>
     */
    deleteEnvironment(args: DeleteEnvironmentCommandInput, options?: __HttpHandlerOptions): Promise<DeleteEnvironmentCommandOutput>;
    deleteEnvironment(args: DeleteEnvironmentCommandInput, cb: (err: any, data?: DeleteEnvironmentCommandOutput) => void): void;
    deleteEnvironment(args: DeleteEnvironmentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteEnvironmentCommandOutput) => void): void;
    /**
     * <p>Deletes an environment member from an AWS Cloud9 development environment.</p>
     */
    deleteEnvironmentMembership(args: DeleteEnvironmentMembershipCommandInput, options?: __HttpHandlerOptions): Promise<DeleteEnvironmentMembershipCommandOutput>;
    deleteEnvironmentMembership(args: DeleteEnvironmentMembershipCommandInput, cb: (err: any, data?: DeleteEnvironmentMembershipCommandOutput) => void): void;
    deleteEnvironmentMembership(args: DeleteEnvironmentMembershipCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteEnvironmentMembershipCommandOutput) => void): void;
    /**
     * <p>Gets information about environment members for an AWS Cloud9 development environment.</p>
     */
    describeEnvironmentMemberships(args: DescribeEnvironmentMembershipsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEnvironmentMembershipsCommandOutput>;
    describeEnvironmentMemberships(args: DescribeEnvironmentMembershipsCommandInput, cb: (err: any, data?: DescribeEnvironmentMembershipsCommandOutput) => void): void;
    describeEnvironmentMemberships(args: DescribeEnvironmentMembershipsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEnvironmentMembershipsCommandOutput) => void): void;
    /**
     * <p>Gets status information for an AWS Cloud9 development environment.</p>
     */
    describeEnvironmentStatus(args: DescribeEnvironmentStatusCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEnvironmentStatusCommandOutput>;
    describeEnvironmentStatus(args: DescribeEnvironmentStatusCommandInput, cb: (err: any, data?: DescribeEnvironmentStatusCommandOutput) => void): void;
    describeEnvironmentStatus(args: DescribeEnvironmentStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEnvironmentStatusCommandOutput) => void): void;
    /**
     * <p>Gets information about AWS Cloud9 development environments.</p>
     */
    describeEnvironments(args: DescribeEnvironmentsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEnvironmentsCommandOutput>;
    describeEnvironments(args: DescribeEnvironmentsCommandInput, cb: (err: any, data?: DescribeEnvironmentsCommandOutput) => void): void;
    describeEnvironments(args: DescribeEnvironmentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEnvironmentsCommandOutput) => void): void;
    /**
     * <p>Gets a list of AWS Cloud9 development environment identifiers.</p>
     */
    listEnvironments(args: ListEnvironmentsCommandInput, options?: __HttpHandlerOptions): Promise<ListEnvironmentsCommandOutput>;
    listEnvironments(args: ListEnvironmentsCommandInput, cb: (err: any, data?: ListEnvironmentsCommandOutput) => void): void;
    listEnvironments(args: ListEnvironmentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListEnvironmentsCommandOutput) => void): void;
    /**
     * <p>Changes the settings of an existing AWS Cloud9 development environment.</p>
     */
    updateEnvironment(args: UpdateEnvironmentCommandInput, options?: __HttpHandlerOptions): Promise<UpdateEnvironmentCommandOutput>;
    updateEnvironment(args: UpdateEnvironmentCommandInput, cb: (err: any, data?: UpdateEnvironmentCommandOutput) => void): void;
    updateEnvironment(args: UpdateEnvironmentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateEnvironmentCommandOutput) => void): void;
    /**
     * <p>Changes the settings of an existing environment member for an AWS Cloud9 development environment.</p>
     */
    updateEnvironmentMembership(args: UpdateEnvironmentMembershipCommandInput, options?: __HttpHandlerOptions): Promise<UpdateEnvironmentMembershipCommandOutput>;
    updateEnvironmentMembership(args: UpdateEnvironmentMembershipCommandInput, cb: (err: any, data?: UpdateEnvironmentMembershipCommandOutput) => void): void;
    updateEnvironmentMembership(args: UpdateEnvironmentMembershipCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateEnvironmentMembershipCommandOutput) => void): void;
}
