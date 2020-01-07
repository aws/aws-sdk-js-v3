import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { UpdateSizeConstraintSetRequest, UpdateSizeConstraintSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateSizeConstraintSetCommandInput = UpdateSizeConstraintSetRequest;
export declare type UpdateSizeConstraintSetCommandOutput = UpdateSizeConstraintSetResponse & __MetadataBearer;
export declare class UpdateSizeConstraintSetCommand extends $Command<UpdateSizeConstraintSetCommandInput, UpdateSizeConstraintSetCommandOutput, WAFRegionalClientResolvedConfig> {
    readonly input: UpdateSizeConstraintSetCommandInput;
    constructor(input: UpdateSizeConstraintSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFRegionalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateSizeConstraintSetCommandInput, UpdateSizeConstraintSetCommandOutput>;
    private serialize;
    private deserialize;
}
