import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { UpdateResourceRequest, UpdateResourceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateResourceCommandInput = UpdateResourceRequest;
export declare type UpdateResourceCommandOutput = UpdateResourceResponse & __MetadataBearer;
export declare class UpdateResourceCommand extends $Command<UpdateResourceCommandInput, UpdateResourceCommandOutput, LakeFormationClientResolvedConfig> {
    readonly input: UpdateResourceCommandInput;
    constructor(input: UpdateResourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LakeFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateResourceCommandInput, UpdateResourceCommandOutput>;
    private serialize;
    private deserialize;
}
