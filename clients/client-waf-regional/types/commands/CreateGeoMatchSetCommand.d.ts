import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { CreateGeoMatchSetRequest, CreateGeoMatchSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateGeoMatchSetCommandInput = CreateGeoMatchSetRequest;
export declare type CreateGeoMatchSetCommandOutput = CreateGeoMatchSetResponse & __MetadataBearer;
export declare class CreateGeoMatchSetCommand extends $Command<CreateGeoMatchSetCommandInput, CreateGeoMatchSetCommandOutput, WAFRegionalClientResolvedConfig> {
    readonly input: CreateGeoMatchSetCommandInput;
    constructor(input: CreateGeoMatchSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFRegionalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateGeoMatchSetCommandInput, CreateGeoMatchSetCommandOutput>;
    private serialize;
    private deserialize;
}
