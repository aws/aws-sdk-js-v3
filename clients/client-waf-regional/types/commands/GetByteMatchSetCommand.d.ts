import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { GetByteMatchSetRequest, GetByteMatchSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetByteMatchSetCommandInput = GetByteMatchSetRequest;
export declare type GetByteMatchSetCommandOutput = GetByteMatchSetResponse & __MetadataBearer;
export declare class GetByteMatchSetCommand extends $Command<GetByteMatchSetCommandInput, GetByteMatchSetCommandOutput, WAFRegionalClientResolvedConfig> {
    readonly input: GetByteMatchSetCommandInput;
    constructor(input: GetByteMatchSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFRegionalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetByteMatchSetCommandInput, GetByteMatchSetCommandOutput>;
    private serialize;
    private deserialize;
}
