import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";
import { GetRateBasedStatementManagedKeysRequest, GetRateBasedStatementManagedKeysResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetRateBasedStatementManagedKeysCommandInput = GetRateBasedStatementManagedKeysRequest;
export declare type GetRateBasedStatementManagedKeysCommandOutput = GetRateBasedStatementManagedKeysResponse & __MetadataBearer;
export declare class GetRateBasedStatementManagedKeysCommand extends $Command<GetRateBasedStatementManagedKeysCommandInput, GetRateBasedStatementManagedKeysCommandOutput, WAFV2ClientResolvedConfig> {
    readonly input: GetRateBasedStatementManagedKeysCommandInput;
    constructor(input: GetRateBasedStatementManagedKeysCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRateBasedStatementManagedKeysCommandInput, GetRateBasedStatementManagedKeysCommandOutput>;
    private serialize;
    private deserialize;
}
