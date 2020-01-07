import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { UpdateGeoMatchSetRequest, UpdateGeoMatchSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateGeoMatchSetCommandInput = UpdateGeoMatchSetRequest;
export declare type UpdateGeoMatchSetCommandOutput = UpdateGeoMatchSetResponse & __MetadataBearer;
export declare class UpdateGeoMatchSetCommand extends $Command<UpdateGeoMatchSetCommandInput, UpdateGeoMatchSetCommandOutput, WAFRegionalClientResolvedConfig> {
    readonly input: UpdateGeoMatchSetCommandInput;
    constructor(input: UpdateGeoMatchSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFRegionalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateGeoMatchSetCommandInput, UpdateGeoMatchSetCommandOutput>;
    private serialize;
    private deserialize;
}
