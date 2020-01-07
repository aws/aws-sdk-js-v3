import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { RegisterTypeInput, RegisterTypeOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RegisterTypeCommandInput = RegisterTypeInput;
export declare type RegisterTypeCommandOutput = RegisterTypeOutput & __MetadataBearer;
export declare class RegisterTypeCommand extends $Command<RegisterTypeCommandInput, RegisterTypeCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: RegisterTypeCommandInput;
    constructor(input: RegisterTypeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterTypeCommandInput, RegisterTypeCommandOutput>;
    private serialize;
    private deserialize;
}
