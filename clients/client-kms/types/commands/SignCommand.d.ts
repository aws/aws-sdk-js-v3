import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { SignRequest, SignResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SignCommandInput = SignRequest;
export declare type SignCommandOutput = SignResponse & __MetadataBearer;
export declare class SignCommand extends $Command<SignCommandInput, SignCommandOutput, KMSClientResolvedConfig> {
    readonly input: SignCommandInput;
    constructor(input: SignCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SignCommandInput, SignCommandOutput>;
    private serialize;
    private deserialize;
}
