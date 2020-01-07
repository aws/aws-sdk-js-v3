import { MarketplaceEntitlementServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MarketplaceEntitlementServiceClient";
import { GetEntitlementsRequest, GetEntitlementsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetEntitlementsCommandInput = GetEntitlementsRequest;
export declare type GetEntitlementsCommandOutput = GetEntitlementsResult & __MetadataBearer;
export declare class GetEntitlementsCommand extends $Command<GetEntitlementsCommandInput, GetEntitlementsCommandOutput, MarketplaceEntitlementServiceClientResolvedConfig> {
    readonly input: GetEntitlementsCommandInput;
    constructor(input: GetEntitlementsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MarketplaceEntitlementServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetEntitlementsCommandInput, GetEntitlementsCommandOutput>;
    private serialize;
    private deserialize;
}
