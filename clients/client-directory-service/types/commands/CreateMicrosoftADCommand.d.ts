import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { CreateMicrosoftADRequest, CreateMicrosoftADResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateMicrosoftADCommandInput = CreateMicrosoftADRequest;
export declare type CreateMicrosoftADCommandOutput = CreateMicrosoftADResult & __MetadataBearer;
export declare class CreateMicrosoftADCommand extends $Command<CreateMicrosoftADCommandInput, CreateMicrosoftADCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: CreateMicrosoftADCommandInput;
    constructor(input: CreateMicrosoftADCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateMicrosoftADCommandInput, CreateMicrosoftADCommandOutput>;
    private serialize;
    private deserialize;
}
