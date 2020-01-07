import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteFleetsRequest, DeleteFleetsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteFleetsCommandInput = DeleteFleetsRequest;
export declare type DeleteFleetsCommandOutput = DeleteFleetsResult & __MetadataBearer;
export declare class DeleteFleetsCommand extends $Command<DeleteFleetsCommandInput, DeleteFleetsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteFleetsCommandInput;
    constructor(input: DeleteFleetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteFleetsCommandInput, DeleteFleetsCommandOutput>;
    private serialize;
    private deserialize;
}
