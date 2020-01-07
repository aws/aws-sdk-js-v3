import { MarketplaceMeteringClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MarketplaceMeteringClient";
import { ResolveCustomerRequest, ResolveCustomerResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ResolveCustomerCommandInput = ResolveCustomerRequest;
export declare type ResolveCustomerCommandOutput = ResolveCustomerResult & __MetadataBearer;
export declare class ResolveCustomerCommand extends $Command<ResolveCustomerCommandInput, ResolveCustomerCommandOutput, MarketplaceMeteringClientResolvedConfig> {
    readonly input: ResolveCustomerCommandInput;
    constructor(input: ResolveCustomerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MarketplaceMeteringClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResolveCustomerCommandInput, ResolveCustomerCommandOutput>;
    private serialize;
    private deserialize;
}
