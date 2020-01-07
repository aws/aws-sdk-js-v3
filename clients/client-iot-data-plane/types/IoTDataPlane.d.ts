import { IoTDataPlaneClient } from "./IoTDataPlaneClient";
import { DeleteThingShadowCommandInput, DeleteThingShadowCommandOutput } from "./commands/DeleteThingShadowCommand";
import { GetThingShadowCommandInput, GetThingShadowCommandOutput } from "./commands/GetThingShadowCommand";
import { PublishCommandInput, PublishCommandOutput } from "./commands/PublishCommand";
import { UpdateThingShadowCommandInput, UpdateThingShadowCommandOutput } from "./commands/UpdateThingShadowCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>AWS IoT</fullname>
 *     <p>AWS IoT-Data enables secure, bi-directional communication between Internet-connected things
 *       (such as sensors, actuators, embedded devices, or smart appliances) and the AWS cloud.
 *       It implements a broker for applications and things to publish messages
 *       over HTTP (Publish) and retrieve, update, and delete thing shadows. A thing shadow is a
 *       persistent representation of your things and their state in the AWS cloud.</p>
 */
export declare class IoTDataPlane extends IoTDataPlaneClient {
    /**
     * <p>Deletes the thing shadow for the specified thing.</p>
     *      <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_DeleteThingShadow.html">DeleteThingShadow</a> in the
     *         <i>AWS IoT Developer Guide</i>.</p>
     */
    deleteThingShadow(args: DeleteThingShadowCommandInput, options?: __HttpHandlerOptions): Promise<DeleteThingShadowCommandOutput>;
    deleteThingShadow(args: DeleteThingShadowCommandInput, cb: (err: any, data?: DeleteThingShadowCommandOutput) => void): void;
    deleteThingShadow(args: DeleteThingShadowCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteThingShadowCommandOutput) => void): void;
    /**
     * <p>Gets the thing shadow for the specified thing.</p>
     *      <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_GetThingShadow.html">GetThingShadow</a> in the
     *         <i>AWS IoT Developer Guide</i>.</p>
     */
    getThingShadow(args: GetThingShadowCommandInput, options?: __HttpHandlerOptions): Promise<GetThingShadowCommandOutput>;
    getThingShadow(args: GetThingShadowCommandInput, cb: (err: any, data?: GetThingShadowCommandOutput) => void): void;
    getThingShadow(args: GetThingShadowCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetThingShadowCommandOutput) => void): void;
    /**
     * <p>Publishes state information.</p>
     *      <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/protocols.html#http">HTTP Protocol</a> in the
     *         <i>AWS IoT Developer Guide</i>.</p>
     */
    publish(args: PublishCommandInput, options?: __HttpHandlerOptions): Promise<PublishCommandOutput>;
    publish(args: PublishCommandInput, cb: (err: any, data?: PublishCommandOutput) => void): void;
    publish(args: PublishCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PublishCommandOutput) => void): void;
    /**
     * <p>Updates the thing shadow for the specified thing.</p>
     *      <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_UpdateThingShadow.html">UpdateThingShadow</a> in the
     *         <i>AWS IoT Developer Guide</i>.</p>
     */
    updateThingShadow(args: UpdateThingShadowCommandInput, options?: __HttpHandlerOptions): Promise<UpdateThingShadowCommandOutput>;
    updateThingShadow(args: UpdateThingShadowCommandInput, cb: (err: any, data?: UpdateThingShadowCommandOutput) => void): void;
    updateThingShadow(args: UpdateThingShadowCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateThingShadowCommandOutput) => void): void;
}
