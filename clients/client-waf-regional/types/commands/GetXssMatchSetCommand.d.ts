import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { GetXssMatchSetRequest, GetXssMatchSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetXssMatchSetCommandInput = GetXssMatchSetRequest;
export declare type GetXssMatchSetCommandOutput = GetXssMatchSetResponse & __MetadataBearer;
export declare class GetXssMatchSetCommand extends $Command<GetXssMatchSetCommandInput, GetXssMatchSetCommandOutput, WAFRegionalClientResolvedConfig> {
    readonly input: GetXssMatchSetCommandInput;
    constructor(input: GetXssMatchSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFRegionalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetXssMatchSetCommandInput, GetXssMatchSetCommandOutput>;
    private serialize;
    private deserialize;
}
