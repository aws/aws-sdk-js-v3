import { PricingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PricingClient";
import { GetProductsRequest, GetProductsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetProductsCommandInput = GetProductsRequest;
export declare type GetProductsCommandOutput = GetProductsResponse & __MetadataBearer;
export declare class GetProductsCommand extends $Command<GetProductsCommandInput, GetProductsCommandOutput, PricingClientResolvedConfig> {
    readonly input: GetProductsCommandInput;
    constructor(input: GetProductsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PricingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetProductsCommandInput, GetProductsCommandOutput>;
    private serialize;
    private deserialize;
}
