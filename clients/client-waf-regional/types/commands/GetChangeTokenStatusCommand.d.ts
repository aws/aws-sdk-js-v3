import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { GetChangeTokenStatusRequest, GetChangeTokenStatusResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetChangeTokenStatusCommandInput = GetChangeTokenStatusRequest;
export declare type GetChangeTokenStatusCommandOutput = GetChangeTokenStatusResponse & __MetadataBearer;
export declare class GetChangeTokenStatusCommand extends $Command<GetChangeTokenStatusCommandInput, GetChangeTokenStatusCommandOutput, WAFRegionalClientResolvedConfig> {
    readonly input: GetChangeTokenStatusCommandInput;
    constructor(input: GetChangeTokenStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFRegionalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetChangeTokenStatusCommandInput, GetChangeTokenStatusCommandOutput>;
    private serialize;
    private deserialize;
}
