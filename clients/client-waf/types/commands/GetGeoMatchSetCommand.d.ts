import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { GetGeoMatchSetRequest, GetGeoMatchSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetGeoMatchSetCommandInput = GetGeoMatchSetRequest;
export declare type GetGeoMatchSetCommandOutput = GetGeoMatchSetResponse & __MetadataBearer;
export declare class GetGeoMatchSetCommand extends $Command<GetGeoMatchSetCommandInput, GetGeoMatchSetCommandOutput, WAFClientResolvedConfig> {
    readonly input: GetGeoMatchSetCommandInput;
    constructor(input: GetGeoMatchSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetGeoMatchSetCommandInput, GetGeoMatchSetCommandOutput>;
    private serialize;
    private deserialize;
}
