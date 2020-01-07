import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { CreateImageBuilderRequest, CreateImageBuilderResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateImageBuilderCommandInput = CreateImageBuilderRequest;
export declare type CreateImageBuilderCommandOutput = CreateImageBuilderResult & __MetadataBearer;
export declare class CreateImageBuilderCommand extends $Command<CreateImageBuilderCommandInput, CreateImageBuilderCommandOutput, AppStreamClientResolvedConfig> {
    readonly input: CreateImageBuilderCommandInput;
    constructor(input: CreateImageBuilderCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppStreamClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateImageBuilderCommandInput, CreateImageBuilderCommandOutput>;
    private serialize;
    private deserialize;
}
