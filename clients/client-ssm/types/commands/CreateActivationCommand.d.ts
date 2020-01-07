import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { CreateActivationRequest, CreateActivationResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateActivationCommandInput = CreateActivationRequest;
export declare type CreateActivationCommandOutput = CreateActivationResult & __MetadataBearer;
export declare class CreateActivationCommand extends $Command<CreateActivationCommandInput, CreateActivationCommandOutput, SSMClientResolvedConfig> {
    readonly input: CreateActivationCommandInput;
    constructor(input: CreateActivationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateActivationCommandInput, CreateActivationCommandOutput>;
    private serialize;
    private deserialize;
}
