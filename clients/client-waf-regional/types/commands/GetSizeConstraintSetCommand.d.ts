import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { GetSizeConstraintSetRequest, GetSizeConstraintSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetSizeConstraintSetCommandInput = GetSizeConstraintSetRequest;
export declare type GetSizeConstraintSetCommandOutput = GetSizeConstraintSetResponse & __MetadataBearer;
export declare class GetSizeConstraintSetCommand extends $Command<GetSizeConstraintSetCommandInput, GetSizeConstraintSetCommandOutput, WAFRegionalClientResolvedConfig> {
    readonly input: GetSizeConstraintSetCommandInput;
    constructor(input: GetSizeConstraintSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFRegionalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSizeConstraintSetCommandInput, GetSizeConstraintSetCommandOutput>;
    private serialize;
    private deserialize;
}
