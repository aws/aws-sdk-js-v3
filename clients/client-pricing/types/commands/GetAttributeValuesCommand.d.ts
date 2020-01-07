import { PricingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PricingClient";
import { GetAttributeValuesRequest, GetAttributeValuesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetAttributeValuesCommandInput = GetAttributeValuesRequest;
export declare type GetAttributeValuesCommandOutput = GetAttributeValuesResponse & __MetadataBearer;
export declare class GetAttributeValuesCommand extends $Command<GetAttributeValuesCommandInput, GetAttributeValuesCommandOutput, PricingClientResolvedConfig> {
    readonly input: GetAttributeValuesCommandInput;
    constructor(input: GetAttributeValuesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PricingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAttributeValuesCommandInput, GetAttributeValuesCommandOutput>;
    private serialize;
    private deserialize;
}
