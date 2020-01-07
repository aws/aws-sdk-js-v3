import { CodeStarconnectionsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarconnectionsClient";
import { CreateConnectionInput, CreateConnectionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateConnectionCommandInput = CreateConnectionInput;
export declare type CreateConnectionCommandOutput = CreateConnectionOutput & __MetadataBearer;
export declare class CreateConnectionCommand extends $Command<CreateConnectionCommandInput, CreateConnectionCommandOutput, CodeStarconnectionsClientResolvedConfig> {
    readonly input: CreateConnectionCommandInput;
    constructor(input: CreateConnectionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeStarconnectionsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateConnectionCommandInput, CreateConnectionCommandOutput>;
    private serialize;
    private deserialize;
}
