import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { CreateVariableRequest, CreateVariableResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateVariableCommandInput = CreateVariableRequest;
export declare type CreateVariableCommandOutput = CreateVariableResult & __MetadataBearer;
export declare class CreateVariableCommand extends $Command<CreateVariableCommandInput, CreateVariableCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: CreateVariableCommandInput;
    constructor(input: CreateVariableCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateVariableCommandInput, CreateVariableCommandOutput>;
    private serialize;
    private deserialize;
}
