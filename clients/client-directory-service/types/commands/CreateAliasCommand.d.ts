import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { CreateAliasRequest, CreateAliasResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateAliasCommandInput = CreateAliasRequest;
export declare type CreateAliasCommandOutput = CreateAliasResult & __MetadataBearer;
export declare class CreateAliasCommand extends $Command<CreateAliasCommandInput, CreateAliasCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: CreateAliasCommandInput;
    constructor(input: CreateAliasCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAliasCommandInput, CreateAliasCommandOutput>;
    private serialize;
    private deserialize;
}
