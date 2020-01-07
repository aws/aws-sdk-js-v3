import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { SignalResourceInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SignalResourceCommandInput = SignalResourceInput;
export declare type SignalResourceCommandOutput = __MetadataBearer;
export declare class SignalResourceCommand extends $Command<SignalResourceCommandInput, SignalResourceCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: SignalResourceCommandInput;
    constructor(input: SignalResourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SignalResourceCommandInput, SignalResourceCommandOutput>;
    private serialize;
    private deserialize;
}
