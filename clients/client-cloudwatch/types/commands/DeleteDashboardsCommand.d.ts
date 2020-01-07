import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { DeleteDashboardsInput, DeleteDashboardsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteDashboardsCommandInput = DeleteDashboardsInput;
export declare type DeleteDashboardsCommandOutput = DeleteDashboardsOutput & __MetadataBearer;
export declare class DeleteDashboardsCommand extends $Command<DeleteDashboardsCommandInput, DeleteDashboardsCommandOutput, CloudWatchClientResolvedConfig> {
    readonly input: DeleteDashboardsCommandInput;
    constructor(input: DeleteDashboardsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDashboardsCommandInput, DeleteDashboardsCommandOutput>;
    private serialize;
    private deserialize;
}
