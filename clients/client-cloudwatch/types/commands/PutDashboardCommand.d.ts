import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { PutDashboardInput, PutDashboardOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutDashboardCommandInput = PutDashboardInput;
export declare type PutDashboardCommandOutput = PutDashboardOutput & __MetadataBearer;
export declare class PutDashboardCommand extends $Command<PutDashboardCommandInput, PutDashboardCommandOutput, CloudWatchClientResolvedConfig> {
    readonly input: PutDashboardCommandInput;
    constructor(input: PutDashboardCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutDashboardCommandInput, PutDashboardCommandOutput>;
    private serialize;
    private deserialize;
}
