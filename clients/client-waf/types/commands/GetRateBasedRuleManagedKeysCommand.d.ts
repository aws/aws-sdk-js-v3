import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { GetRateBasedRuleManagedKeysRequest, GetRateBasedRuleManagedKeysResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetRateBasedRuleManagedKeysCommandInput = GetRateBasedRuleManagedKeysRequest;
export declare type GetRateBasedRuleManagedKeysCommandOutput = GetRateBasedRuleManagedKeysResponse & __MetadataBearer;
export declare class GetRateBasedRuleManagedKeysCommand extends $Command<GetRateBasedRuleManagedKeysCommandInput, GetRateBasedRuleManagedKeysCommandOutput, WAFClientResolvedConfig> {
    readonly input: GetRateBasedRuleManagedKeysCommandInput;
    constructor(input: GetRateBasedRuleManagedKeysCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRateBasedRuleManagedKeysCommandInput, GetRateBasedRuleManagedKeysCommandOutput>;
    private serialize;
    private deserialize;
}
