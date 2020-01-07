import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteFlowLogsRequest, DeleteFlowLogsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteFlowLogsCommandInput = DeleteFlowLogsRequest;
export declare type DeleteFlowLogsCommandOutput = DeleteFlowLogsResult & __MetadataBearer;
export declare class DeleteFlowLogsCommand extends $Command<DeleteFlowLogsCommandInput, DeleteFlowLogsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteFlowLogsCommandInput;
    constructor(input: DeleteFlowLogsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteFlowLogsCommandInput, DeleteFlowLogsCommandOutput>;
    private serialize;
    private deserialize;
}
