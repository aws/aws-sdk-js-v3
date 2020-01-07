import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CreateDiskRequest, CreateDiskResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDiskCommandInput = CreateDiskRequest;
export declare type CreateDiskCommandOutput = CreateDiskResult & __MetadataBearer;
export declare class CreateDiskCommand extends $Command<CreateDiskCommandInput, CreateDiskCommandOutput, LightsailClientResolvedConfig> {
    readonly input: CreateDiskCommandInput;
    constructor(input: CreateDiskCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDiskCommandInput, CreateDiskCommandOutput>;
    private serialize;
    private deserialize;
}
