import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { DeregisterTypeInput, DeregisterTypeOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeregisterTypeCommandInput = DeregisterTypeInput;
export declare type DeregisterTypeCommandOutput = DeregisterTypeOutput & __MetadataBearer;
export declare class DeregisterTypeCommand extends $Command<DeregisterTypeCommandInput, DeregisterTypeCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: DeregisterTypeCommandInput;
    constructor(input: DeregisterTypeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterTypeCommandInput, DeregisterTypeCommandOutput>;
    private serialize;
    private deserialize;
}
