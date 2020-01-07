import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { CreateStackRequest, CreateStackResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateStackCommandInput = CreateStackRequest;
export declare type CreateStackCommandOutput = CreateStackResult & __MetadataBearer;
export declare class CreateStackCommand extends $Command<CreateStackCommandInput, CreateStackCommandOutput, AppStreamClientResolvedConfig> {
    readonly input: CreateStackCommandInput;
    constructor(input: CreateStackCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppStreamClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateStackCommandInput, CreateStackCommandOutput>;
    private serialize;
    private deserialize;
}
