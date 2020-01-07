import { SQSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SQSClient";
import { ChangeMessageVisibilityRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ChangeMessageVisibilityCommandInput = ChangeMessageVisibilityRequest;
export declare type ChangeMessageVisibilityCommandOutput = __MetadataBearer;
export declare class ChangeMessageVisibilityCommand extends $Command<ChangeMessageVisibilityCommandInput, ChangeMessageVisibilityCommandOutput, SQSClientResolvedConfig> {
    readonly input: ChangeMessageVisibilityCommandInput;
    constructor(input: ChangeMessageVisibilityCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SQSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ChangeMessageVisibilityCommandInput, ChangeMessageVisibilityCommandOutput>;
    private serialize;
    private deserialize;
}
