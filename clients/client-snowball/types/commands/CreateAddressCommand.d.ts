import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";
import { CreateAddressRequest, CreateAddressResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateAddressCommandInput = CreateAddressRequest;
export declare type CreateAddressCommandOutput = CreateAddressResult & __MetadataBearer;
export declare class CreateAddressCommand extends $Command<CreateAddressCommandInput, CreateAddressCommandOutput, SnowballClientResolvedConfig> {
    readonly input: CreateAddressCommandInput;
    constructor(input: CreateAddressCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SnowballClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAddressCommandInput, CreateAddressCommandOutput>;
    private serialize;
    private deserialize;
}
