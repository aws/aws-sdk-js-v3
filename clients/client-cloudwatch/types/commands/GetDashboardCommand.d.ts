import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { GetDashboardInput, GetDashboardOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDashboardCommandInput = GetDashboardInput;
export declare type GetDashboardCommandOutput = GetDashboardOutput & __MetadataBearer;
export declare class GetDashboardCommand extends $Command<GetDashboardCommandInput, GetDashboardCommandOutput, CloudWatchClientResolvedConfig> {
    readonly input: GetDashboardCommandInput;
    constructor(input: GetDashboardCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDashboardCommandInput, GetDashboardCommandOutput>;
    private serialize;
    private deserialize;
}
