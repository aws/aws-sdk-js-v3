import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { CreateSizeConstraintSetRequest, CreateSizeConstraintSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateSizeConstraintSetCommandInput = CreateSizeConstraintSetRequest;
export declare type CreateSizeConstraintSetCommandOutput = CreateSizeConstraintSetResponse & __MetadataBearer;
export declare class CreateSizeConstraintSetCommand extends $Command<CreateSizeConstraintSetCommandInput, CreateSizeConstraintSetCommandOutput, WAFClientResolvedConfig> {
    readonly input: CreateSizeConstraintSetCommandInput;
    constructor(input: CreateSizeConstraintSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSizeConstraintSetCommandInput, CreateSizeConstraintSetCommandOutput>;
    private serialize;
    private deserialize;
}
