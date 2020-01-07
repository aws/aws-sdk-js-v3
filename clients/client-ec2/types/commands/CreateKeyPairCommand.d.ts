import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateKeyPairRequest, KeyPair } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateKeyPairCommandInput = CreateKeyPairRequest;
export declare type CreateKeyPairCommandOutput = KeyPair & __MetadataBearer;
export declare class CreateKeyPairCommand extends $Command<CreateKeyPairCommandInput, CreateKeyPairCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateKeyPairCommandInput;
    constructor(input: CreateKeyPairCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateKeyPairCommandInput, CreateKeyPairCommandOutput>;
    private serialize;
    private deserialize;
}
