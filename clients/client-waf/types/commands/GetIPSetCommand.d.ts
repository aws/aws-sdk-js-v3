import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { GetIPSetRequest, GetIPSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetIPSetCommandInput = GetIPSetRequest;
export declare type GetIPSetCommandOutput = GetIPSetResponse & __MetadataBearer;
export declare class GetIPSetCommand extends $Command<GetIPSetCommandInput, GetIPSetCommandOutput, WAFClientResolvedConfig> {
    readonly input: GetIPSetCommandInput;
    constructor(input: GetIPSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetIPSetCommandInput, GetIPSetCommandOutput>;
    private serialize;
    private deserialize;
}
