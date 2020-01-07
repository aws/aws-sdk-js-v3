import { MigrationHubConfigClient } from "./MigrationHubConfigClient";
import { CreateHomeRegionControlCommandInput, CreateHomeRegionControlCommandOutput } from "./commands/CreateHomeRegionControlCommand";
import { DescribeHomeRegionControlsCommandInput, DescribeHomeRegionControlsCommandOutput } from "./commands/DescribeHomeRegionControlsCommand";
import { GetHomeRegionCommandInput, GetHomeRegionCommandOutput } from "./commands/GetHomeRegionCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>The AWS Migration Hub home region APIs are available specifically for working with your
 *       Migration Hub home region. You can use these APIs to determine a home region, as well as to
 *       create and work with controls that describe the home region.</p>
 *
 *          <p>You can use these APIs within your home region only. If you call these APIs from outside
 *       your home region, your calls are rejected, except for the ability to register your agents and
 *       connectors. </p>
 *
 *          <p> You must call <code>GetHomeRegion</code> at least once before you call any other AWS
 *       Application Discovery Service and AWS Migration Hub APIs, to obtain the account's Migration
 *       Hub home region.</p>
 *
 *          <p>The <code>StartDataCollection</code> API call in AWS Application Discovery Service allows
 *       your agents and connectors to begin collecting data that flows directly into the home region,
 *       and it will prevent you from enabling data collection information to be sent outside the home
 *       region. </p>
 *
 *          <p>For specific API usage, see the sections that follow in this AWS Migration Hub Home Region
 *       API reference. </p>
 *
 *          <note>
 *             <p>The Migration Hub Home Region APIs do not support AWS Organizations.</p>
 *          </note>
 */
export declare class MigrationHubConfig extends MigrationHubConfigClient {
    /**
     * <p>This API sets up the home region for the calling account only.</p>
     */
    createHomeRegionControl(args: CreateHomeRegionControlCommandInput, options?: __HttpHandlerOptions): Promise<CreateHomeRegionControlCommandOutput>;
    createHomeRegionControl(args: CreateHomeRegionControlCommandInput, cb: (err: any, data?: CreateHomeRegionControlCommandOutput) => void): void;
    createHomeRegionControl(args: CreateHomeRegionControlCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateHomeRegionControlCommandOutput) => void): void;
    /**
     * <p>This API permits filtering on the <code>ControlId</code>, <code>HomeRegion</code>, and
     *         <code>RegionControlScope</code> fields.</p>
     */
    describeHomeRegionControls(args: DescribeHomeRegionControlsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeHomeRegionControlsCommandOutput>;
    describeHomeRegionControls(args: DescribeHomeRegionControlsCommandInput, cb: (err: any, data?: DescribeHomeRegionControlsCommandOutput) => void): void;
    describeHomeRegionControls(args: DescribeHomeRegionControlsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeHomeRegionControlsCommandOutput) => void): void;
    /**
     * <p>Returns the calling account’s home region, if configured. This API is used by other AWS
     *       services to determine the regional endpoint for calling AWS Application Discovery Service and
     *       Migration Hub. You must call <code>GetHomeRegion</code> at least once before you call any
     *       other AWS Application Discovery Service and AWS Migration Hub APIs, to obtain the account's
     *       Migration Hub home region.</p>
     */
    getHomeRegion(args: GetHomeRegionCommandInput, options?: __HttpHandlerOptions): Promise<GetHomeRegionCommandOutput>;
    getHomeRegion(args: GetHomeRegionCommandInput, cb: (err: any, data?: GetHomeRegionCommandOutput) => void): void;
    getHomeRegion(args: GetHomeRegionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetHomeRegionCommandOutput) => void): void;
}
