import { MultiplexProgram, Reservation } from "./models_1";

/**
 * Placeholder documentation for UpdateMultiplexProgramResponse
 */
export interface UpdateMultiplexProgramResponse {
  /**
   * The updated multiplex program.
   */
  MultiplexProgram?: MultiplexProgram;
}

export namespace UpdateMultiplexProgramResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMultiplexProgramResponse): any => ({
    ...obj,
  });
}

/**
 * Request to update a reservation
 */
export interface UpdateReservationRequest {
  /**
   * Name of the reservation
   */
  Name?: string;

  /**
   * Unique reservation ID, e.g. '1234567'
   */
  ReservationId: string | undefined;
}

export namespace UpdateReservationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateReservationRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for UpdateReservationResponse
 */
export interface UpdateReservationResponse {
  /**
   * Reserved resources available to use
   */
  Reservation?: Reservation;
}

export namespace UpdateReservationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateReservationResponse): any => ({
    ...obj,
  });
}
