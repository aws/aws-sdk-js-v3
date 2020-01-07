import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { CreateAliasRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateAliasCommandInput = CreateAliasRequest;
export declare type CreateAliasCommandOutput = __MetadataBearer;
export declare class CreateAliasCommand extends $Command<CreateAliasCommandInput, CreateAliasCommandOutput, KMSClientResolvedConfig> {
    readonly input: CreateAliasCommandInput;
    constructor(input: CreateAliasCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAliasCommandInput, CreateAliasCommandOutput>;
    private serialize;
    private deserialize;
}
