import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { CreateFleetRequest, CreateFleetResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateFleetCommandInput = CreateFleetRequest;
export declare type CreateFleetCommandOutput = CreateFleetResult & __MetadataBearer;
export declare class CreateFleetCommand extends $Command<CreateFleetCommandInput, CreateFleetCommandOutput, AppStreamClientResolvedConfig> {
    readonly input: CreateFleetCommandInput;
    constructor(input: CreateFleetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppStreamClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateFleetCommandInput, CreateFleetCommandOutput>;
    private serialize;
    private deserialize;
}
