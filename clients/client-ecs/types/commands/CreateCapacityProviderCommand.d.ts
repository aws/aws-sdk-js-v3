import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { CreateCapacityProviderRequest, CreateCapacityProviderResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateCapacityProviderCommandInput = CreateCapacityProviderRequest;
export declare type CreateCapacityProviderCommandOutput = CreateCapacityProviderResponse & __MetadataBearer;
export declare class CreateCapacityProviderCommand extends $Command<CreateCapacityProviderCommandInput, CreateCapacityProviderCommandOutput, ECSClientResolvedConfig> {
    readonly input: CreateCapacityProviderCommandInput;
    constructor(input: CreateCapacityProviderCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCapacityProviderCommandInput, CreateCapacityProviderCommandOutput>;
    private serialize;
    private deserialize;
}
