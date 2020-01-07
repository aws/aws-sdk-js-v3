import { MarketplaceMeteringClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MarketplaceMeteringClient";
import { RegisterUsageRequest, RegisterUsageResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RegisterUsageCommandInput = RegisterUsageRequest;
export declare type RegisterUsageCommandOutput = RegisterUsageResult & __MetadataBearer;
export declare class RegisterUsageCommand extends $Command<RegisterUsageCommandInput, RegisterUsageCommandOutput, MarketplaceMeteringClientResolvedConfig> {
    readonly input: RegisterUsageCommandInput;
    constructor(input: RegisterUsageCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MarketplaceMeteringClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterUsageCommandInput, RegisterUsageCommandOutput>;
    private serialize;
    private deserialize;
}
