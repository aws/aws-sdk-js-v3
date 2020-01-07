import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CreateKeyPairRequest, CreateKeyPairResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateKeyPairCommandInput = CreateKeyPairRequest;
export declare type CreateKeyPairCommandOutput = CreateKeyPairResult & __MetadataBearer;
export declare class CreateKeyPairCommand extends $Command<CreateKeyPairCommandInput, CreateKeyPairCommandOutput, LightsailClientResolvedConfig> {
    readonly input: CreateKeyPairCommandInput;
    constructor(input: CreateKeyPairCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateKeyPairCommandInput, CreateKeyPairCommandOutput>;
    private serialize;
    private deserialize;
}
