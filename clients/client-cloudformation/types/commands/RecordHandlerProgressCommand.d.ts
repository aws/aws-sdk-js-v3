import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { RecordHandlerProgressInput, RecordHandlerProgressOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RecordHandlerProgressCommandInput = RecordHandlerProgressInput;
export declare type RecordHandlerProgressCommandOutput = RecordHandlerProgressOutput & __MetadataBearer;
export declare class RecordHandlerProgressCommand extends $Command<RecordHandlerProgressCommandInput, RecordHandlerProgressCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: RecordHandlerProgressCommandInput;
    constructor(input: RecordHandlerProgressCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RecordHandlerProgressCommandInput, RecordHandlerProgressCommandOutput>;
    private serialize;
    private deserialize;
}
