import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { DeleteSizeConstraintSetRequest, DeleteSizeConstraintSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteSizeConstraintSetCommandInput = DeleteSizeConstraintSetRequest;
export declare type DeleteSizeConstraintSetCommandOutput = DeleteSizeConstraintSetResponse & __MetadataBearer;
export declare class DeleteSizeConstraintSetCommand extends $Command<DeleteSizeConstraintSetCommandInput, DeleteSizeConstraintSetCommandOutput, WAFClientResolvedConfig> {
    readonly input: DeleteSizeConstraintSetCommandInput;
    constructor(input: DeleteSizeConstraintSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSizeConstraintSetCommandInput, DeleteSizeConstraintSetCommandOutput>;
    private serialize;
    private deserialize;
}
