import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UpdateRoleDescriptionRequest, UpdateRoleDescriptionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateRoleDescriptionCommandInput = UpdateRoleDescriptionRequest;
export declare type UpdateRoleDescriptionCommandOutput = UpdateRoleDescriptionResponse & __MetadataBearer;
export declare class UpdateRoleDescriptionCommand extends $Command<UpdateRoleDescriptionCommandInput, UpdateRoleDescriptionCommandOutput, IAMClientResolvedConfig> {
    readonly input: UpdateRoleDescriptionCommandInput;
    constructor(input: UpdateRoleDescriptionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateRoleDescriptionCommandInput, UpdateRoleDescriptionCommandOutput>;
    private serialize;
    private deserialize;
}
