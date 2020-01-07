import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { EnableKeyRotationRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type EnableKeyRotationCommandInput = EnableKeyRotationRequest;
export declare type EnableKeyRotationCommandOutput = __MetadataBearer;
export declare class EnableKeyRotationCommand extends $Command<EnableKeyRotationCommandInput, EnableKeyRotationCommandOutput, KMSClientResolvedConfig> {
    readonly input: EnableKeyRotationCommandInput;
    constructor(input: EnableKeyRotationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableKeyRotationCommandInput, EnableKeyRotationCommandOutput>;
    private serialize;
    private deserialize;
}
